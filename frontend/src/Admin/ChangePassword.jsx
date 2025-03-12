import { useState } from "react";
import { setPassword } from "./AdminAuthConfig.js"; // Import the password setter
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setPassword(newPassword); // Store the new password in localStorage
    alert("Password changed successfully!");
    navigate("/adminAuth"); // Redirect to admin login
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Update Password</button>
    </div>
  );
};

export default ChangePassword;
