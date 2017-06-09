# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
task = Task.create([{ name: 'Probando el Seed'}, {description: 'Probando el Seed'},
                   { name: 'Probando el Seed 2' }, {description: 'Probando el Seed 2'},
                   { name: 'Probando el Seed 3'}, {description: 'Probando el Seed 3'}])