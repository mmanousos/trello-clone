# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Board.destroy_all
List.destroy_all
Card.destroy_all

board1 = Board.create title: "First board"

list1 = List.create title: "first list", board: board1
list2 = List.create title: "second list", board: board1

card1_1 = Card.create title: "card 1 list 1", list: list1, description: "Cards do many cool things.", labels: ['green', 'yellow', 'orange', 'blue', 'purple'], due_date: 2.days.from_now
card2_1 = Card.create title: "card 2 list 1", list: list1, description: "Cards do many cool things.", due_date: 5.days.from_now

card1_2 = Card.create title: "card 1 list 2", list: list2
card2_2 = Card.create title: "card 2 list 2", list: list2
card3_2 = Card.create title: "card 3 list 2", list: list2

comment1 = Comment.create text: 'list 1 card 1', card: card1_1

comment2 = Comment.create text: 'comment 1 list 2 card 3', card: card3_2