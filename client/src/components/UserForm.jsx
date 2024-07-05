import React, { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import ReservationModal from "./ReservationModal"; // Import the CustomModal component

const UserForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5002/api/v1/auth/get-product"
      );
      if (data?.success) {
        setProducts(data?.product);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = () => {
    if (
      selectedProduct &&
      pickUpLocation &&
      dropOffLocation &&
      pickUpDate &&
      dropOffDate
    ) {
      setIsModalVisible(true);
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div className="form-bg h-[380px] block m-auto rounded-md mt-20 w-[1200px] max-[786px]:w-full max-[786px]:h-fit max-[786px]:pb-8 max-[786px]:mb-32">
      <h2 className="pt-8 pl-6 text-2xl font-bold">Book a Car</h2>
      <div className="form-section max-[786px]:flex-col max-[786px]:w-full">
        <div className="max-[786px]:w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="input-icon"
            >
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
            </svg>
            <span>Select a car</span>
          </div>
          <Select
            placeholder="Select a Car"
            size="large"
            showSearch
            className="w-[380px] h-10 text-sm font-bold max-[786px]:w-full"
            onChange={(value) =>
              setSelectedProduct(
                products.find((product) => product.mark === value)
              )
            }
          >
            {products?.map((product) => (
              <Select.Option key={product._id}  value={product.mark}>
                {product.name}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className="max-[786px]:w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>

            <span>Pick-up</span>
          </div>
          <Select
            className="w-[380px] h-10 max-[786px]:w-full"
            showSearch
            placeholder="Select a Car"
            onChange={setPickUpLocation}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "Delhi", label: "Delhi" },
              { value: "Ludhiana", label: "Ludhiana" },
              { value: "Kanpur", label: "Kanpur" },
              { value: "Dehradun", label: "Dehradun" },
              { value: "Mirzapur", label: "Mirzapur" },
            ]}
          />
        </div>
        <div className="max-[786px]:w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>

            <span>Drop-of</span>
          </div>
          <Select
            className="w-[380px] h-10 max-[786px]:w-full"
            showSearch
            placeholder="Select a Car"
            onChange={setDropOffLocation}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "Delhi", label: "Delhi" },
              { value: "Ludhiana", label: "Ludhiana" },
              { value: "Kanpur", label: "Kanpur" },
              { value: "Dehradun", label: "Dehradun" },
              { value: "Mirzapur", label: "Mirzapur" },
            ]}
          />
        </div>
        <div className="max-[786px]:w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Pick-up</span>
          </div>
          <input
            type="date"
            className="w-[380px] h-10  outline-none rounded-md border max-[786px]:w-full"
            placeholder="Select  a date"
            onChange={(e) => setPickUpDate(e.target.value)}
          />
        </div>
        <div className="max-[786px]:w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Drop-of</span>
          </div>
          <input
            type="date"
            className="w-[380px] h-10 outline-none rounded-md border max-[786px]:w-full"
            placeholder="Select a date"
            onChange={(e) => setDropOffDate(e.target.value)}
          />
        </div>
        <div className="flex max-[786px]:w-full ">
          <button
            onClick={handleSearch}
            className="w-[380px] h-10 mt-12 bg-blue-600 text-white font-semibold text-lg border max-[786px]:w-full"
          >
            Search
          </button>
        </div>
      </div>
      <ReservationModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        {selectedProduct && (
          <div className="flex justify-between px-5">
            <div className="flex flex-col gap-5 w-1/2">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 text-xl font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Pick-Up Date & Time:</span>
                </div>
                <div className="flex gap-3 pl-2 font-semibold text-custom-gray" >
                  <h3>{pickUpDate}</h3> /{" "}
                  <input type="time" className="border" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 text-xl font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Drop-off Date & Time:</span>
                </div>
                <div className="flex gap-3 pl-2 font-semibold text-custom-gray">
                  <h3>{dropOffDate}</h3> /{" "}
                  <input type="time" className="border" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 text-xl font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Pick-up Location:</span>
                </div>
                <h3 className="pl-2 font-semibold text-custom-gray">{pickUpLocation}</h3>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 font-bold text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Drop-off Location:</span>
                </div>
                <h3 className="pl-2 font-semibold text-custom-gray">{dropOffLocation}</h3>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-5 justify-center items-center">
              <h3 className="font-semibold text-lg"><span className="text-blue-600 font-bold text-lg">Car-</span> {selectedProduct.mark} </h3>
              <img
                src={`http://localhost:5002/api/v1/auth/product-photo/${selectedProduct._id}`}
                alt={selectedProduct.mark}
                className="w-[360px]"
              />

              <button className="border bg-blue-600 font-semibold text-lg w-1/2 py-1 shadow-md text-white ">Book Now</button>
            </div>
          </div>
        )}
      </ReservationModal>
    </div>
  );
};

export default UserForm;
