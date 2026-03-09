import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../auth/authService";
import type { RegisterRequest } from "../types/authTypes";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterRequest>();

  const onSubmit = async (data: RegisterRequest) => {
    try {
        await registerUser(data);
        alert("Registration successful");
        navigate("/");
    } catch (error: any) {
        if (error.response && error.response.data) {
        const errors = error.response.data;

        const firstError = Object.values(errors)[0];
        alert(firstError);
        } else {
        alert("Registration failed");
        }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border mb-2"
          {...register("name", { required: "Name is required" })}
          required
        />

        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-2"
          {...register("email", { required: "Email is required" })}
          required
        />

        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-2"
          {...register("password", { required: "Password is required" })}
          required
        />

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <select
          className="w-full p-2 border mb-2"
          {...register("role", { required: true })}
        >
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-500 text-white p-2 mt-3"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>

        <p className="text-center mt-3">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;