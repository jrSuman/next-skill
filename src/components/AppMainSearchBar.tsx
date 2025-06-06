import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const AppMainSearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [searchList, setSearchList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<any>(null);
  let navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault()
    // console.log("handle serach", searchQuery)
    if(searchQuery.length < 2) return;
    // setLoading(true);
    try {
      setIsVisible(true)
      setLoading(true)
      const res = await api.get(`course/?search=${searchQuery}`);
      if (res.status == 200) {
        // console.log("response", res);
        // setCoursesCategory(res.data)
        setSearchList(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("eroor", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!dropdownRef.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        setIsVisible(false);
        setSearchQuery('')
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [dropdownRef]);

  const handleNavigate = (path) => {
    setIsVisible(false);
    navigate(path);
  };

  return (
    <div className="relative w-full border rounded-full h-12" ref={dropdownRef}>
      <form  onSubmit={handleSearch} className="h-full w-full">
      <input
        type="text"
        className="appearance-none grow w-full peer border-0 h-full bg-white/0 transition-all outline-0 active:outline-0 focus:outline-0 pl-12 pr-3"
        placeholder="What you want to learn."
        value={searchQuery}
        onChange={(e: any) => setSearchQuery(e.target.value)}
        
      />
        </form>
      <div className="absolute top-1/2 -translate-y-1/2 left-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>

{
  isVisible &&
      <div className="absolute top-14 left-0 right-0 min-h-10 bg-white border p-4 rounded-lg">
        {searchList.length > 0  ? 
        <div className="grid gap-4">
          {
           searchList.map(item => (

              <div className="flex gap-4 relative cursor-pointer" key={item.id} onClick={()=> handleNavigate(`/courses/${item.id}`)}>
                {/* {item.title} */}
                <div className="w-20 aspect-video rounded overflow-hidden">
                  <img src={item.image} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <span className="text-lg">{item.title}</span>
                  <span className="text-xs text-gray-500">{item.level}</span>
                </div>
                {/* <Link className="absolute inset-0" to={`/courses/${item.id}`}></Link> */}
              </div>
            ))
          }
        </div>
        :
        <span>Your search - <strong>{searchQuery}</strong> - did not match any courses.</span>
        }
      </div>
}
    
    </div>
  );
};

export default AppMainSearchBar;
