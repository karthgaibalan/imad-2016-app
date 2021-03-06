var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles={
    'article-one':{
        title:`Article One  by KB`,
        heading:`Article one`,
        date:`Sep 19, 2016`,
        content:` 
                <p>
                                This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.
                 </p>
                 `
 },
    'article-two':{
        title:`Article tep  by KB`,
        heading:`Article one`,
        date:`Sep 20, 2016`,
        content:` 
                <p>
                                This is the content of Article twp.
                 </p>`
 },
    'article-three':{
        title:`Article three  by KB`,
        heading:`Article one`,
        date:`Sep 21, 2016`,
        content:` 
                <p>
                                This is the content of Article three.
                 </p>`
 }
};

function createtemplate(data)
{
    var title    = data.title;
    var heading  = data.heading;
    var date     = data.date;
    var content  = data.content;
    
    var htmltemplate =`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet"/>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                 <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
`;
return htmltemplate;
}

app.get('/:articlename', function(req,res)
{
    var articlename = req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
