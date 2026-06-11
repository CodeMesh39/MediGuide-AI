import { useState } from "react";

function ProfilePage() {
  const savedProfile =
    JSON.parse(
      localStorage.getItem(
        "mediguide_profile"
      ) || "{}"
    );

  const [name, setName] =
    useState(
      savedProfile.name || ""
    );

  const [email, setEmail] =
    useState(
      savedProfile.email || ""
    );

  const [age, setAge] =
    useState(
      savedProfile.age || ""
    );

  const [gender, setGender] =
    useState(
      savedProfile.gender || ""
    );

  const [image, setImage] =
    useState(
      savedProfile.image || ""
    );

  const saveProfile = () => {
    const profile = {
      name,
      email,
      age,
      gender,
      image,
    };

    localStorage.setItem(
      "mediguide_profile",
      JSON.stringify(profile)
    );

    alert(
      "Profile Saved Successfully"
    );
  };

  const handleImage =
    (event) => {
      const file =
        event.target.files[0];

      if (!file) return;

      const reader =
        new FileReader();

      reader.onload = () => {
        setImage(
          reader.result
        );
      };

      reader.readAsDataURL(
        file
      );
    };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-sky-600 mb-8">
          Profile Settings
        </h1>

        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-100">
                👤
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={
              handleImage
            }
            className="mt-4"
          />
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="w-full border rounded-xl p-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full border rounded-xl p-3"
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) =>
              setAge(
                e.target.value
              )
            }
            className="w-full border rounded-xl p-3"
          />

          <select
            value={gender}
            onChange={(e) =>
              setGender(
                e.target.value
              )
            }
            className="w-full border rounded-xl p-3"
          >
            <option value="">
              Select Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>

            <option value="Other">
              Other
            </option>
          </select>

          <button
            onClick={
              saveProfile
            }
            className="w-full bg-sky-500 text-white py-3 rounded-xl"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;