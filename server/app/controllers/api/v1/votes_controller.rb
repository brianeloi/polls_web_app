class Api::V1::VotesController < Api::V1::ApiController
    before_action :set_vote, only: [:show, :update, :destroy]
    before_action :require_authorization!, only: [:update, :destroy]

    # GET /api/v1/votes
    def index
        @votes = current_user.votes

        render json: @votes
    end

    # GET /api/v1/votes/1
    def show
        render json: @vote
    end

    # POST /api/v1/votes
    def create
        @vote = Vote.new(vote_params.merge(user: current_user))

        if @vote.save
            render json: @vote, status: :created
        else
            render json: @vote.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /api/v1/votes/1
    def update
        if @vote.update(vote_params)
            render json: @vote
        else
            render json: @vote.errors, status: :unprocessable_entity
        end
    end

    # DELETE /api/v1/votes/1
    def destroy
        @vote.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_vote
        @vote = Vote.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def vote_params
        params.require(:vote).permit(:poll_id, :user_id, :choice)
    end

    def require_authorization!
        unless current_user == @vote.user
            render json: { error: "User need to be the owner to edit or delete a Poll" }, status: :forbidden
        end
    end

    def authenticate_poll?
        @poll ||= @vote.poll if @vote.present?
        @poll ||= params[:poll_id] ? Poll.find(params[:poll_id]) : nil
        
        @poll && @poll.authenticate == true
    end

    def authenticate_user!
        return true if params[:action] = 'delete'
        return true unless authenticate_poll?

        super
    end
end
