import { useEffect, useState } from "react";

function SettingsPage() {
  const [darkMode, setDarkMode] =
    useState(
      localStorage.getItem(
        "theme"
      ) === "dark"
    );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    }
  }, [darkMode]);

  const clearData = () => {
    if (
      !window.confirm(
        "Clear all MediGuide AI data?"
      )
    )
      return;

    localStorage.clear();

    window.location.reload();
  };

  const exportData = () => {
    const data = {
      chats: JSON.parse(
        localStorage.getItem(
          "mediguide_chats"
        ) || "[]"
      ),

      reports: JSON.parse(
        localStorage.getItem(
          "report_history"
        ) || "[]"
      ),

      images: JSON.parse(
        localStorage.getItem(
          "image_history"
        ) || "[]"
      ),

      emergency: JSON.parse(
        localStorage.getItem(
          "emergency_history"
        ) || "[]"
      ),

      profile: JSON.parse(
        localStorage.getItem(
          "mediguide_profile"
        ) || "{}"
      ),
    };

    const blob = new Blob(
      [
        JSON.stringify(
          data,
          null,
          2
        ),
      ],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "mediguide-backup.json";

    a.click();
  };

  const importData = (
    event
  ) => {
    const file =
      event.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = () => {
      const data =
        JSON.parse(
          reader.result
        );

      if (data.chats)
        localStorage.setItem(
          "mediguide_chats",
          JSON.stringify(
            data.chats
          )
        );

      if (data.reports)
        localStorage.setItem(
          "report_history",
          JSON.stringify(
            data.reports
          )
        );

      if (data.images)
        localStorage.setItem(
          "image_history",
          JSON.stringify(
            data.images
          )
        );

      if (data.emergency)
        localStorage.setItem(
          "emergency_history",
          JSON.stringify(
            data.emergency
          )
        );

      if (data.profile)
        localStorage.setItem(
          "mediguide_profile",
          JSON.stringify(
            data.profile
          )
        );

      alert(
        "Data Imported Successfully"
      );

      window.location.reload();
    };

    reader.readAsText(file);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border p-8">
        <h1 className="text-3xl font-bold text-sky-600 mb-8">
          Settings
        </h1>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span>
              Dark Mode
            </span>

            <button
              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }
              className="bg-sky-500 text-white px-4 py-2 rounded-xl"
            >
              {darkMode
                ? "Disable"
                : "Enable"}
            </button>
          </div>

          <button
            onClick={
              exportData
            }
            className="w-full bg-green-500 text-white py-3 rounded-xl"
          >
            Export Data
          </button>

          <label className="block">
            <input
              type="file"
              accept=".json"
              onChange={
                importData
              }
            />

            <div className="mt-2 bg-blue-500 text-white py-3 rounded-xl text-center cursor-pointer">
              Import Data
            </div>
          </label>

          <button
            onClick={
              clearData
            }
            className="w-full bg-red-500 text-white py-3 rounded-xl"
          >
            Clear All Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;