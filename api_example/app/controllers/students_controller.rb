class StudentsController < ApplicationController
  def index
    students = Student.all
    render json: students
  end
  def show
    student = Student.find(params[:id])
    render json: student
  end
  def create
    student = Student.create(student_params)
    if student.valid?
      render json: student
    else
      render json: student.errors
    end
  end
  def destroy
    student = Student.find(params[:id])
    if student.destroy
      render json: student
    else
      render json: student.errors
    end
  end
  def update
    student = Student.find(params[:id])
    student.update(student_params)
    if student.valid?
      render json: student
    else
      render json: student.errors
    end
  end

  private
  def student_params
    params.require(:student).permit(:name, :cohort)
  end
end
