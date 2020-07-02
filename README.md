# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|  name|string|null: false|
|  mail|string|null: false,unique: true|
|password|string|null: false|

### Association
- has_many :message
- has_many :users_groups
- has_many :group, through: :users_groups

## groupテーブル

|Column|Type|Options|
|------|----|------|
|  name|string|null: false,unique: true|
|user_id|integer|null: false,foreign_key: true|

### Association
- has_many :message
- has_many :users_groups
- has_many :group, through: :users_groups

## messageグループ
　
|Column|Type|Options|
|------|----|------|
|  body|text|null: false|
| image|string||
|group_id|string|null: false,foreign_key: true|
|user_id|string|null: false,foreign_key: true|

## Association
- belong_to :user
- belong_to :group