import React from "react";

export default function Table({ head, body }) {
  return (
    <>
      <div className="max-w-full mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-4">
            <div className="inline-block min-w-full py-2 sm:px-4">
              <div className="overflow-y-auto">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      {head.length > 0
                        ? head.map((item, idx) => (
                            <th
                              key={idx}
                              scope="col"
                              className="px-6 py-4 text-sm font-medium text-left text-gray-700 capitalize"
                            >
                              {item}
                            </th>
                          ))
                        : ""}
                    </tr>
                  </thead>
                  <tbody>
                    {body.length > 0 ? (
                      body.map((items, idx) => (
                        <tr
                          key={idx}
                          className="font-medium align-top transition duration-300 ease-in-out border-b rounded-md hover:bg-gray-200"
                        >
                          {items.length > 0
                            ? items.map((item, idx) => (
                                <td
                                  key={idx}
                                  className="px-6 py-4 text-sm text-gray-500"
                                >
                                  {item}
                                </td>
                              ))
                            : ""}
                        </tr>
                      ))
                    ) : (
                      <></>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
