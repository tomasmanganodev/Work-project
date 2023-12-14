const express = require("express");
const { body, query, validationResult } = require("express-validator");
const controller = require("../controllers/users");

const router = express.Router();

router.post(
  "/add",
  [
    body('name').trim().isLength({ min: 2 }),
    body('username').trim().isLength({ min: 2 }),
    body("email")
      .trim()
      .isEmail()
      .isLength({ min: 5 })
      .withMessage("Invalid date for email")
      .normalizeEmail(),
    body("password").isStrongPassword(),
    body('salary').isInt({ min: 0 }),
    body('date_start')
      .isISO8601()
      .toDate()
      .withMessage('Invalid date format for date_start'),
    body('birthdate')
      .isISO8601()
      .toDate()
      .withMessage('Invalid date format for birthdate'),
  ],
  (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    controller.postAddUser(req, res, next);
  }
);

router.post(
    "/upd",
    [
      body('name').trim().isLength({ min: 2 }),
      body('username').trim().isLength({ min: 2 }),
      body("email")
        .trim()
        .isEmail()
        .isLength({ min: 5 })
        .withMessage("Invalid date for email")
        .normalizeEmail(),
      body("password").isStrongPassword(),
      body('salary').isInt({ min: 0 }),
      body('date_start')
        .isISO8601()
        .toDate()
        .withMessage('Invalid date format for date_start'),
      body('birthdate')
        .isISO8601()
        .toDate()
        .withMessage('Invalid date format for birthdate'),
    ],
    (req, res, next) => {
      // Check for validation errors
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      controller.postUpdUser(req, res, next);
    }
  );

router.get("/all", controller.getUsers);

router.get("/:id", [query("id").trim().escape()], (req, res, next) => {
  // Check for validation errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  controller.getUser_ID(req, res, next);
});

router.get("/email/:email", [query("email").trim().escape()], (req, res, next) => {
  // Check for validation errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  controller.getUser_email(req, res, next);
});

router.get("/:page/:pageSize", controller.getUsersPag);

router.get("/:page/:pageSize/:uname", controller.updbyUser);



module.exports = router;