import { body } from "express-validator"

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("Title is required and must have at least one letter!")
      .isLength({min: 5})
      .withMessage("Must have at least 5 characters and at least 1 letter"),
    body('rating')
      .isNumeric()
      .withMessage("Must be a number")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("Must be a value between 0 and 10")
        }
        return true
      }),
    body("description")
      .isString()
      .withMessage("Description is required")
      .isLength({min: 5})
      .withMessage("Must have at least 5 characters and only letters"),
    body("director")
      .isString()
      .withMessage("Director name ir required"),
    body("poster")
      .isURL()
      .withMessage("Image must be an URL")
  ]
}