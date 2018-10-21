class ChangeLikesToNumberInPosts < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :likes, 'integer USING CAST(likes AS integer)'
  end
end
