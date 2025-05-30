import React, { useState } from "react";
import { FaThumbsUp, FaCommentDots, FaStar } from "react-icons/fa";

const initialReviews = [
  {
    id: 1,
    name: "Emma Davis",
    date: "20 Mar, 2024",
    rating: 5,
    comment:
      "Layanan yang di berikan di sini bagus dan cepat dalam pelayanan",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    likes: 8,
    replies: 2,
  },
  {
    id: 2,
    name: "Anuj Mishra",
    date: "16 Dec, 2023",
    rating: 4,
    comment:
      "Tidak perlu diragukan lagi untuk belanja di sini harga ternjangkau",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    likes: 10,
    replies: 5,
  },
  {
    id: 3,
    name: "Robert Karmazov",
    date: "24 Oct, 2023",
    rating: 5,
    comment:
      "harga terjangkau ngeprint cuman 500 perak",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    likes: 4,
    replies: 0,
  },
];

export default function CustomerReviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 0,
  });

  const handleLike = (id) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.comment &&
      formData.rating
    ) {
      setReviews((prev) => [
        {
          id: Date.now(),
          name: formData.name,
          date: new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
          rating: formData.rating,
          comment: formData.comment,
          avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
          likes: 0,
          replies: 0,
        },
        ...prev,
      ]);
      setFormData({ name: "", email: "", comment: "", rating: 0 });
    }
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Customer Reviews
      </h2>

      <div className="space-y-6">
        {reviews.map((r) => (
          <div key={r.id} className="bg-orange-100 p-5 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{r.name}</h4>
                    <p className="text-sm text-gray-700">{r.date}</p>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    {Array(r.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="mr-1" />
                      ))}
                  </div>
                </div>
                <p className="mt-2 text-gray-800 text-sm">{r.comment}</p>
                <div className="flex gap-6 mt-3 text-gray-700 text-sm">
                  <button
                    onClick={() => handleLike(r.id)}
                    className="flex items-center gap-1 hover:text-gray-900"
                  >
                    <FaThumbsUp /> {r.likes}
                  </button>
                  <div className="flex items-center gap-1">
                    <FaCommentDots /> {r.replies}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 mt-10 p-6 rounded-lg shadow-sm space-y-4"
      >
        <h3 className="text-lg text-gray-900 font-semibold">
          Submit Your Review
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">
            Add Your Rating:
          </span>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar
                key={i}
                className={`cursor-pointer text-xl ${
                  formData.rating > i ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setFormData({ ...formData, rating: i + 1 })}
              />
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-2 rounded w-full text-gray-900"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border p-2 rounded w-full text-gray-900"
            required
          />
        </div>

        <textarea
          placeholder="Write your review..."
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
          className="w-full border p-2 rounded h-24 text-gray-900"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-orange-300 text-white px-6 py-2 rounded hover:bg-orange-400 transition"
        >
          Submit Reviews
        </button>
      </form>
    </div>
  );
}
