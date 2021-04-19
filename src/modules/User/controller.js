class UserController {

    constructor({userService, mailer, jwt, bcrypt}) {
        this.userService = userService;
        this.jwt = jwt;
        this.mailer = mailer;
        this.bcrypt = bcrypt;
    }

    getAll = async (req, res) => {
        try {

            let users = await this.userService.getAll();
            res.status(200).json(users);

        } catch (err) {
            res.status(400).json(err);
        }
    }
    
    register = async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        try {

            if (!email || !password)
                res.status(400).json("missing parameters")
            else {
                const salt = this.bcrypt.genSaltSync(10);
                const hash = this.bcrypt.hashSync(password, salt);

                let user = await this.userService.register({email, password: hash});
                await this.mailer.sendMail(user.dataValues);

                res.status(201).json("new user registered");
            }

        }
        catch (err) {
            res.status(400).json('erreur server');
        }
    }

    login = async (req, res) => {
        let userData = { email: (req.body.email) ? req.body.email : '' }
        let password = (req.body.password) ? req.body.password : '';
        try {

            let user = await this.userService.getByMail(userData.email);

            if (!user)
                return res.status(400).json('Utilisateur non trouver');

            let checkPassword = await this.bcrypt.compareSync(password, user.password);

            if (checkPassword) {
                let token = await this.jwt.generateToken({ id: user.id });
                return res.status(200).json(token);
            }
            else
                return res.status(400).json('le mot de passe saisie ne correspond pas a celui définis lors de la creation de votre compte');
            
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

export default UserController;