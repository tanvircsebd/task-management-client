// import Banner from "@/assets/Home/employee-task-management-system.png";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const TaskBanner = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleClick = () => {
    if (user) {
      navigate("/tasks");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="px-2 py-32 bg-white dark:bg-gray-800 md:px-0">
      <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                Stay Organized, Stay{" "}
                <span className="text-primary">Productive</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Simplify your task management with our intuitive platform. Plan,
                prioritize, and execute tasks effortlessly with powerful
                features.
              </p>

              <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center lg:justify-start">
                <button
                  onClick={handleClick}
                  className="px-6 py-3 bg-primary text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img
                src="https://plan.io/images/blog/what-is-task-management.png?1739878567"
                alt="Task Management Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBanner;
