class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy]
# GET /comments

def index

puts params.inspect
if !(params[:posts_id].present?)
  @comments = Comment.all
else
  @comments = Comment.where(posts_id: params[:posts_id])
  puts @comments.inspect
  end
  render json: @comments
end
  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    puts params.inspect
    @comment = current_user.comments.new(comment_params.merge(post_id: params[:post_id]))
    puts @comment
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:commenttitle, :commentbody,:user_id, :posts_id)
    end
end
