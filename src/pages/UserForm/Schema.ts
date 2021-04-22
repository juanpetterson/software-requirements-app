import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: 'O valor do campo é inválido',
    required: 'Campo obrigatório',
  },
  string: {
    min: 'O campo deve conter no mínimo 6 caracteres',
    max: 'O campo deve conter no máximo 12 caracteres',
    email: 'Formato de e-mail inválido',
  },
});

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12),
});
