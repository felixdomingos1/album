import * as Yup from "yup";

const esquema = Yup.object().shape({
  image: Yup.object({
    fieldname: Yup.string().required(),
    originalname: Yup.string().required(),
    encoding: Yup.string().required(),
    mimetype: Yup.string().required(),
    destination: Yup.string().required(),
    filename: Yup.string().required(),
    path: Yup.string().required(),
    size: Yup.number().required(),
  }).required(),
  name: Yup.string().max(100).required(),
  email: Yup.string().max(100).email().required(),
  password: Yup.string().max(100).required(),
});

export default esquema;
