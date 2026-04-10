import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExamsPage from "./features/admin-dashboard/pages/ExamsPage";
import QuestionsPage from "./features/admin-dashboard/pages/QuestionsPage";
import StudentAnswers from "./features/admin/pages/StudentAnswers";
import StudentExams from "./features/admin/pages/StudentExams";
import AuthLayout from "./layout/AuthLayout";
import LoginPage from "./features/Authentication/LoginPage";
import RegisterPage from "./features/Authentication/RegisterPage";
import DashboardLayout from "./layout/DashboardLayout";
import DiplomasAdmin from "./features/admin-dashboard/pages/Diplomas";
import Diploma from "./features/admin/components/Diplomas";
import DiplomaAdminDetails from "./features/admin-dashboard/pages/DiplomaDetails";
import AddNewDiploma from "./features/admin-dashboard/pages/AddNewDiploma";
import EditNewDiploma from "./features/admin-dashboard/pages/EditNewDiploma";

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
        { index: true, element: <DiplomasAdmin></DiplomasAdmin> },
        { path: "admin/questions", element: <QuestionsPage /> },
        { path: "diplomadmin/:id", element: <DiplomaAdminDetails /> },
        { path: "admin/exams", element: <ExamsPage /> },
        { path: "/AddNewDiploma", element: <AddNewDiploma /> },
        { path: "/EditNewDiploma", element: <EditNewDiploma /> },

        // student
        { path: "student/answers", element: <StudentAnswers /> },
        { path: "student/exams", element: <StudentExams /> },
        { path: "student/diploma", element: <Diploma /> },
      ],
    },
  ]);

  return <RouterProvider router={router}> </RouterProvider>;
}
