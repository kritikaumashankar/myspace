# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :posts, dependent: :destroy
  
  serialize :liked_friends, Array

    def self.liked_friends(ids)
       ids = ids.empty? ? [0] : ids 
       User.where("id IN (?)", ids)
    end

    def self.random_friend(ids)
      ids = ids.empty? ? [0] : ids
      User.where("id NOT IN (?)", ids).order("RANDOM()")
    end
end
