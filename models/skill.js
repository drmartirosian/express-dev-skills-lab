//skill array
const skills = [
    {skill:'HTML', done: true},
    {skill:'CSS', done: true},
    {skill:'JavaScript', done: true},
    {skill:'NodeJS', done: true},
    {skill:'MongoDB', done: true},
    {skill:'Python', done: false},
    {skill:'React', done: false},
    {skill:'Ruby', done: false},
    {skill:'RubyonRails', done: false},
    {skill:'Java', done: false},
];

//export 
module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
};

function getAll(){
    return skills;
};
function getOne(id){
    return skills[id];
};
function create(skill){
    skills.push(skill);
};
function update(id, skill) {
    skills.splice(id, 1, skill);
};
function deleteOne(id){
    skills.splice(id, 1);
};