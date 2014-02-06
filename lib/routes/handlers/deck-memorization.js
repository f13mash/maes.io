/**
 * Created by f13 on 4/2/14.
 */

exports.index = function(req, res){
    res.render('index', { title: 'hopeless wanderer', req: req });
};
