// routes/comments.js\
module.exports = function(app) {
  app.get('/', (req, res) => {
    //возвращает ответ 200(Все хорошо - 200, Повторное обращение - 304,Ошибка клиента - 404, Ошибка сершера - 500)
    //res.send(200);
    //Обработка готовой страницы ejs, jade и др фреймворков, в {} указываются данные, которые нужно передать в предкомпилятор ejs,jade и др.
    res.render('index',{})
  });

  app.post('/', (req, res) => {
    if(req){
      /*
      req.(body/params/headers) - Это объекты запроса
      params используется для получение параметра id страниц вида index/(1,2,3,...)
      */
      res.send(req.body);
    }
  });
}
