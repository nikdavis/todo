class ItemsController < ApplicationController
  def index
    @items = Item.all
    render json: @items
  end

  def show
  end

  def edit
  end

  def new
  end

  def create
  end
end
