class Api::PostsController < ApplicationController
  # before_action :authenticate_user! 
  before_action :post_index
  before_action :set_post, except: [:index, :create]

  def index
    #render json: @post_called.posts.order(created_at: :desc)
    render json: Post.order(created_at: :desc)
  end

  def create
    post = @post_called.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  

  protected
  def post_index
    if params[:friend_id]
        @post_called = User.find(params[:friend_id])
    else
      @post_called = current_user
      end
  end
  private
  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:description, :likes)
  end

end
