import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Team", href: "team", current: false },
  { name: "About Us", href: "./about-project", current: false },
  { name: "Contact Us", href: "./contact-us", current: false },
  { name: "Previous Designs", href: "./design", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TopNav() {
  return (
    <Disclosure as="nav" className="bg-gray-800 p-3">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                      Ai
                      <span className="font-bold text-[#c29525]">
                        -Architect
                      </span>
                    </h1>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-14 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-2xl font-semibold decoration-transparent" // Adjusted class to text-base
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}

                <Link to="/login">
                  <button class="text-white font-bold text-xl py-2.5 px-4  rounded mt-[-2px]">
                    Login
                  </button>
                </Link>
                <Link to="/userprofile ">
                  <div class="mx-4 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
