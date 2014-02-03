
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'ma(h)es(h) (gondi)', req: req });
};
