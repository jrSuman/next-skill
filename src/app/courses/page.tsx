import AppInput from "@/components/ui/AppInput"
import AppProductCard from "@/components/ui/AppProductCard"

 const Courses = () => {

  const coursesCategory = [
    {
      id: 1,
      categoryName: 'Development',
      children: [
        {
          id: 1,
          name: 'Web Development'
        },
        {
          id: 2,
          name: 'Mobile Development'
        },
        {
          id: 3,
          name: 'Game Development'
        },
        {
          id: 4,
          name: 'Data Science'
        }
      ]
    },
    {
      id: 2,
      categoryName: 'Designing',
      children: [
        {
          id: 1,
          name: 'UI/UX Design'
        },
        {
          id: 2,
          name: 'Graphics Design'
        },
        {
          id: 3,
          name: 'Web Design'
        },
      ]
    },
    {
      id: 3,
      categoryName: 'It And Software',
      children: [
        {
          id: 1,
          name: 'IT Certification'
        },
        {
          id: 2,
          name: 'Network & Security'
        },
        {
          id: 3,
          name: 'Operating Systems'
        },
      ]
    },
    {
      id: 4,
      categoryName: 'Office Products',
      children: [
        {
          id: 1,
          name: 'Microsoft'
        },
        {
          id: 2,
          name: 'Google'
        },
      ]
    }
  ]

  const coursesList  = [
    {
      id: 1,
      title: "Data Science With Python Data Science With Python",
      image: "https://img-c.udemycdn.com/course/480x270/10812_b0af_6.jpg",
      description:
      "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
      duration: 3,
      time: ['2:30 - 3:30 am','2:30 - 3:30 am'],
      level: 0
    },
    {
      id: 2,
      title: "Python with Django",
      image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
      description:
      "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
      duration: 3,
      time: ['2:30 - 3:30 am','2:30 - 3:30 am'],
      level: 1
    },
    {
      id: 3,
      title: "MERN Stack Training",
      image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
      description:
      "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
      duration: 3,
      time: ['2:30 - 3:30 am','2:30 - 3:30 am'],
      level: 2
    },
    {
      id: 4,
      title: "React Stack Training",
      image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
      description:
      "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
      duration: 3,
      time: ['2:30 - 3:30 am','2:30 - 3:30 am'],
      level: 2
    },
    {
      id: 5,
      title: "UI/UX Training",
      image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
      description:
      "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
      duration: 3,
      time: ['2:30 - 3:30 am','2:30 - 3:30 am'],
      level: 0
    },
    {
      id: 6,
      title: "Python with Django",
      image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
      description:
      "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
      duration: 3,
      time: ['2:30 - 3:30 am','2:30 - 3:30 am'],
      level: 1
    },
    // {
    //   id: 7,
    //   title: "MERN Stack Training",
    //   image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
    //   description:
    //   "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
    //   duration: 3,
    //   time: ['2:30 - 3:30 am','2:30 - 3:30 am'],
    //   level: 2
    // },
    // {
    //   id: 8,
    //   title: "React Stack Training",
    //   image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
    //   description:
    //   "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
    //   duration: 3,
    //   time: ['2:30 - 3:30 am','2:30 - 3:30 am'],
    //   level: 2
    // },
  ]
  return (
      <div className="container mx-auto flex gap-10">
         <div className="w-[240px] border-r pr-5 py-5 flex flex-col gap-4">
            <div className="">
            <span>All Courses</span>
            </div>
            {
              coursesCategory.map(category => {
                return(
                  <div className="" key={category.id}>
                    <div className="border-b pb-1">
                      <span className="font-semibold">{category.categoryName}</span>
                    </div>
                    <div className="flex flex-col py-2">
                    {
                      category.children && category.children.length > 0 && category.children.map(item => {
                        return(
                          <div className="px-3 py-2 flex items-center cursor-pointer hover:bg-primary-50/50 rounded-lg" key={item.id}>
                            <span className="" >{item.name}</span>
                          </div>
                        )
                      } )
                    }
                    </div>
                  </div>
                )
              } )
            }
          </div> 

          <div className="flex-1 py-10">
            <div className="flex justify-between items-center pb-4 gap-10">
              <h3 className="text-3xl font-semibold">FrontEnd Development</h3>
              {/* <div className=""> */}
                <AppInput placeholder="Search"/>
              {/* </div> */}
            </div>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              {
                coursesList.map(item => {
                  return(
                    <AppProductCard key={item.id} data={item}/>
                  )
                })
              }
            </div>
          </div>
      </div>
  )
}

export default Courses;