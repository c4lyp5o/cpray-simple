const Cpray = require('cpray');
const cpray = new Cpray();

exports.comingHome = (req, res, next) => {
    res.render('index', { data: 'none' });
}

exports.knowingHome = (req, res, next) => {
    cpray.getTimesbyWeek(req.params.zone)
        .then(data => {
            console.log(data);
            res.render('index', { data: data });
        }
        )
        .catch(err => {
            res.status(500).send(err);
        }
    );

}
    