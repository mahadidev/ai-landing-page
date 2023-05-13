import React, { useState, useEffect, useRef } from "react";
import ProjectPropOne from "./itemProp/ProjectPropOne";
import SectionTitle from "../../elements/section-title/SectionTitle";
import ProjectData from "../../data/project/ProjectData.json";
import axios from "axios";
import { toast } from "react-toastify";

const filters = [
  {
    id: 1,
    label: "All Works",
  },
  {
    id: 2,
    label: "Branding",
  },
  {
    id: 3,
    label: "Mobile",
  },
];

const AllData = ProjectData;

const ProjectOne = ({ parentClass, colSize, itemShow, columnGap }) => {
  const [getAllItems] = useState(AllData);
  const [visiableProject] = useState(itemShow ? itemShow : 6);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setActiveFilter(filters[0].label);
    setVisibleItems(getAllItems.filter((item) => item.id <= visiableProject));
  }, []);

  const [generatedImage, setGeneratedImage] = useState(null);
  const imageInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const getImage = () => {
    setLoading(true);
    // api conf
    const apiEndPoint = "https://api.openai.com/v1/images/generations";
    const secretKey = "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";
    const key = imageInputRef.current.value;
    if (key) {
      axios
        .post(
          apiEndPoint,
          {
            prompt: key,
            n: 2,
            size: "1024x1024",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${secretKey}`,
            },
          }
        )
        .then((response) => {
          // answer
          var answer = response.data.data[0].url;
          setGeneratedImage(answer);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      toast("input can't be empty", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const onPressEnterKey = (e) => {
    if (e.key === "Enter") {
      getImage();
    }
  };

  return (
    <>
      <div
        className={`section section-padding-2 ${
          parentClass ? parentClass : ""
        }`}
      >
        <div className="container">
          <SectionTitle
            subtitle="DALL-E Open AI"
            title="Get image beyond <br /> your imagination."
            textAlignment="heading-left mb--40"
            textColor=""
          />
          <div className="isotope-button isotope-project-btn">
            <div className="input-group-wrapper d-block">
              <div className="input-group shadow-none">
                <input
                  type="text"
                  className={`form-control ${generatedImage && "shadow-sm"}`}
                  placeholder="ex. coca cola inside  iceland"
                  ref={imageInputRef}
                  onKeyDown={onPressEnterKey}
                />
                <button
                  className={`subscribe-btn ${loading && "opacity-50"}`}
                  type="button"
                  onClick={getImage}
                  disabled={loading}
                >
                  {loading ? "Generating..." : "Generate"}
                </button>
              </div>
              {generatedImage && (
                <div className="w-100 p-2">
                  <img
                    className="m-auto d-block rounded-2"
                    style={{
                      maxHeight: "500px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    src={generatedImage}
                    alt="Generated Image"
                  />
                </div>
              )}
            </div>
          </div>
          <div className={`row ${columnGap ? columnGap : "row-35"}`}>
            {visibleItems.map((data) => (
              <div className={colSize ? colSize : "col-md-6"} key={data.id}>
                <ProjectPropOne projectStyle="" portfolio={data} />
              </div>
            ))}
          </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
          <li className="shape shape-1">
            <img
              src={process.env.PUBLIC_URL + "/images/others/circle-2.png"}
              alt="circle"
            />
          </li>
          <li className="shape shape-2">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"}
              alt="Line"
            />
          </li>
          <li className="shape shape-3">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
              alt="Line"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectOne;
