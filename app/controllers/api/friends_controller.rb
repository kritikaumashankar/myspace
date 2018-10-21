class Api::FriendsController < ApplicationController
  before_action :set_friend,only: [:show, :update]
  before_action :authenticate_user!
  def index
    render json: User.random_friend(current_user.liked_friends).select{|f| f.id != current_user.id}
  end

  def show
    render json: @friend
  end

  def my_friends
    render json: User.liked_friends(current_user.liked_friends)
  end

  def update

    if current_user.liked_friends.include? params[:id].to_i
      current_user.liked_friends.delete(params[:id].to_i)
    else
        current_user.liked_friends << params[:id].to_i
    end
    current_user.save
  end

  private

    def set_friend
      @friend = User.find(params[:id])
    end

end
