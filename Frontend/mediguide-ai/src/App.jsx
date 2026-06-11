import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import ChatPage from "./pages/ChatPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ReportsPage from "./pages/ReportsPage";
import ImagesPage from "./pages/ImagesPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import EmergencyPage from "./pages/EmergencyPage";
import MedicationPage from "./pages/MedicationPage";
import AppointmentsPage from "./pages/AppointmentsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={<ChatPage />}
        />

        <Route
          path="analytics"
          element={<AnalyticsPage />}
        />

        <Route
          path="reports"
          element={<ReportsPage />}
        />

        <Route
          path="images"
          element={<ImagesPage />}
        />

        <Route
          path="profile"
          element={<ProfilePage />}
        />

        <Route
          path="settings"
          element={<SettingsPage />}
        />
        <Route
  path="/emergency"
  element={<EmergencyPage />}
/>
      </Route>
      <Route
  path="/profile"
  element={<ProfilePage />}
/>
<Route
  path="/settings"
  element={<SettingsPage />}
/>
<Route
  path="/medications"
  element={<MedicationPage />}
/>
<Route
  path="/appointments"
  element={<AppointmentsPage />}
/>
    </Routes>
  );
}

export default App;