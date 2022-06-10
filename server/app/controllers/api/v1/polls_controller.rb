class Api::V1::PollsController < Api::V1::ApiController
    before_action :set_poll, only: [:show, :update, :destroy]
    before_action :require_authorization!, only: [:show, :update, :destroy]

    # GET /api/v1/polls
    def index
        @polls = current_user.polls

        render json: @polls
    end

    # GET /api/v1/polls/1
    def show
        render json: @poll
    end

    # POST /api/v1/polls
    def create
        @poll = Poll.new(poll_params.merge(user: current_user))

        if @poll.save
            render json: @poll, status: :created
        else
            render json: @poll.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /api/v1/polls/1
    def update
        if @poll.update(poll_params)
            render json: @poll
        else
            render json: @poll.errors, status: :unprocessable_entity
        end
    end

    # DELETE /api/v1/polls/1
    def destroy
        @poll.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_poll
        @poll = Poll.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def poll_params
        parameters = params.require(:poll).permit(:title, :description, :choices)
        parameters[:choices] = JSON.parse parameters[:choices]
        
        parameters
    end

    def require_authorization!
        unless current_user == @poll.user
            render json: {}, status: :forbidden
        end
    end
end
