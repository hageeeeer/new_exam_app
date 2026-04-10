import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExamsPage from "./features/admin-dashboard/pages/ExamsPage";
import QuestionsPage from "./features/admin-dashboard/pages/QuestionsPage";
import StudentAnswers from "./features/admin/pages/StudentAnswers";
import StudentExams from "./features/admin/pages/StudentExams";
import AuthLayout from "./layout/AuthLayout";
import LoginPage from "./features/Authentication/LoginPage";
import RegisterPage from "./features/Authentication/RegisterPage";
import DashboardLayout from "./layout/DashboardLayout";
import Diplomas from "./features/admin-dashboard/pages/Diplomas";

export default function App() {
  // routing pathes
  const router = createBrowserRouter([
    // المجموعة الأولى: بدون سايد بار
    {
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
      ],
    },
    // المجموعة الثانية: بسايد بار (أدمن + طالب)
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        // admin
        { index: true, element: <Diplomas></Diplomas> },
        { path: "admin/questions", element: <QuestionsPage /> },
        { path: "admin/exams", element: <ExamsPage /> },

        // student
        { path: "student/answers", element: <StudentAnswers /> },
        { path: "student/exams", element: <StudentExams /> },
      ],
    },
  ]);

  return <RouterProvider router={router}> </RouterProvider>;
}
