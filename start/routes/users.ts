import Route from '@ioc:Adonis/Core/Route'

Route.get('/users/register/:key', 'Users/Register.show')
Route.post('/users/register', 'Users/Register.store')
Route.put('/users/register', 'Users/Register.update')
