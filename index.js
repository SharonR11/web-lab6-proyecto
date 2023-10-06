var _ = require("underscore");
var lista = [1,2,3,4,5,6]; _.each(lista,function(item){
    //console.log(item)
});

var employeesCollection = [
    {
        "id":1,
        "name":"Soni",
        "designation":"SE",
        "salary":25000
    },
    {
        "id":2,
        "name":"Rohit",
        "designation":"SSE",
        "salary":35000
    },
    {
        "id":3,
        "name":"Akanksha",
        "designation":"Manager",
        "salary":45000
    },
    {
        "id":4,
        "name":"Mohan",
        "designation":"Accountant",
        "salary":30000
    },
    {
        "id":5,
        "name":"Gita",
        "designation":"SSE",
        "salary":35000
    }
]

var cargos = _.map(employeesCollection, function(employee){
    return {nombre: employee.name, cargo: employee.designation};
});
console.log(cargos);
console.log(_.pluck(employeesCollection, "name"));

