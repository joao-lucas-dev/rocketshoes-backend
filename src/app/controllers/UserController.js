import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(404).json({ error: 'Validation fails' });
    }

    const { email } =  req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(401).json({ error: 'User already exists' });
    }

    const { id, name, admin } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      admin,
    });
  }
}

export default new UserController;
