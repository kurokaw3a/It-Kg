import {IMain} from "../../../models/User/IMain";
import {INews, INewsPage} from "../../../models/User/INews";
import {createSlice} from "@reduxjs/toolkit";
import {IFaq} from "../../../models/User/IFaq";
import {IAdministration} from "../../../models/User/IAdministration";
import {IEmployee, IEmployees} from "../../../models/User/IEmployees";
import {IRegulatorydocuments} from "../../../models/User/IRegulatorydocuments";

interface userState {
  main: IMain
  news: INews[]
  newsPage?: INewsPage
  faq: IFaq[]
  administration: IAdministration[]
  employees: IEmployees[]
  employee?: IEmployee
  documents: IRegulatorydocuments[]
}



const initialState: userState = {
  main: {
    top:[
      {
        id: 1,
        image: "https://pbs.twimg.com/media/GDMOuPkXQAALftP.jpg",
        title: 'Bleach',
      },
      {
        id: 2,
        image: 'https://pbs.twimg.com/media/GDMOuPkXQAALftP.jpg',
        title: 'Bleach',
      },
      {
        id: 3,
        image: 'https://pbs.twimg.com/media/GDMOuPkXQAALftP.jpg',
        title: 'Bleach',
      },
      {
        id: 4,
        image: 'https://pbs.twimg.com/media/GDMOuPkXQAALftP.jpg',
        title: 'Bleach',
      },
    ],
    half: [
      {
        id: 1,
        image: 'https://images3.alphacoders.com/131/1310203.png',
        title: 'Bleach',
      },
      {
        id: 2,
        image: 'https://images3.alphacoders.com/131/1310203.png',
        title: 'Bleach',
      },
      {
        id: 3,
        image: 'https://images3.alphacoders.com/131/1310203.png',
        title: 'Bleach',
      },
      {
        id: 4,
        image: 'https://images3.alphacoders.com/131/1310203.png',
        title: 'Bleach',
      },
      {
        id: 5,
        image: 'https://images3.alphacoders.com/131/1310203.png',
        title: 'Bleach',
      },
      {
        id: 6,
        image: 'https://images3.alphacoders.com/131/1310203.png',
        title: 'Bleach',
      },
    ],
    bottom:[
      {
        id: 1,
        image: 'https://i.redd.it/yh53xazu59571.jpg',
        title: 'Студенты окончили колледж',
        date: '14/12/07',
        description:
            'Группа талантливых и целеустремленных студентов успешно завершила обучение в колледже.',
      },
      {
        id: 2,
        image: 'https://i.redd.it/yh53xazu59571.jpg',
        title: 'Студенты окончили колледж',
        date: '14/12/07',
        description:
            'Группа талантливых и целеустремленных студентов успешно завершила обучение в колледже.',
      },
      {
        id: 3,
        image: 'https://i.redd.it/yh53xazu59571.jpg',
        title: 'Студенты окончили колледж',
        date: '14/12/07',
        description:
            'Группа талантливых и целеустремленных студентов успешно завершила обучение в колледже.',
      },
      {
        id: 4,
        image: 'https://i.redd.it/yh53xazu59571.jpg',
        title: 'Студенты окончили колледж',
        date: '14/12/07',
        description:
            'Группа талантливых и целеустремленных студентов успешно завершила обучение в колледже.',
      },
    ]
  },
  news: [
    {
      id: 1,
      image: "https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/1582230703442-UDD9QS1BHWNWEG3W0GOZ/kaneki+centipede.PNG",
      importance: "important",
      date: '2024.08.29',
      title: 'Neftchi: Энергетический Лидер',
      description:
          'Neftchi — это передовая компания, занимающаяся разработкой инновационных технологий в области нефтегазовой промышленности. С фокусом на устойчивом развитии и экологической ответственности, Neftchi ищет новые пути для улучшения процессов добычи, переработки и использования энергии. Используя передовые научные методы и инженерные решения, Neftchi стремится сократить вредные выбросы и оптимизировать производственные процессы,',
    },
    {
      id: 2,
      image: 'https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/1582230703442-UDD9QS1BHWNWEG3W0GOZ/kaneki+centipede.PNG',
      importance: 'foremployees',
      date: '2021.07.10',
      title: 'Neftchi: Энергетический Лидер',
      description:
          'Neftchi — это передовая компания, занимающаяся разработкой инновационных технологий в области нефтегазовой промышленности. С фокусом на устойчивом развитии и экологической ответственности, Neftchi ищет новые пути для улучшения процессов добычи, переработки и использования энергии. Используя передовые научные методы и инженерные решения, Neftchi стремится сократить вредные выбросы и оптимизировать производственные процессы,',
    },
    {
      id: 3,
      image: 'https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/1582230703442-UDD9QS1BHWNWEG3W0GOZ/kaneki+centipede.PNG',
      importance: 'none',
      date: '2020.03.24',
      title: 'Neftchi: Энергетический Лидер',
      description:
          'Neftchi — это Neftchi — это передовая компанияNeftchi — это передовая компанияNeftchi — это передовая компанияNeftchi — это передовая компанияNeftchi — это передовая компанияNeftchi — это передовая компанияNeftchi — это передовая компанияNeftchi — это передовая компанияNeftchi — это передовая компанияNeftchi — это передовая компанияNeftchi — это передовая компанияпередовая компания, занимающаяся разработкой инновационных технологий в области нефтегазовой промышленности. С фокусом на устойчивом развитии и экологической ответственности, Neftchi ищет новые пути для улучшения процессов добычи, переработки и использования энергии. Используя передовые научные методы и инженерные решения, Neftchi стремится сократить вредные выбросы и оптимизировать производственные процессы,',
    },
  ],
  newsPage: {
    id: 1,
    title: 'Neftchi: Энергетический Лидер',
    description:
        'Neftchi — это передовая компания, занимающаяся разработкой инновационных технологий в области нефтегазовой промышленности. С фокусом на устойчивом развитии и экологической ответственности, Neftchi ищет новые пути для улучшения процессов добычи, переработки и использования энергии.',
    date: '13.02.2022',
    category: 'important',
    files: ['PDF', 'VIDEO', 'IMAGE', 'YOUTUBE'],
    images: [
      'https://m.media-amazon.com/images/I/71-Y-3usHkL._UF1000,1000_QL80_.jpg',
      'https://i1.sndcdn.com/artworks-000213577767-fbxzyi-t500x500.jpg',
      'https://upload.wikimedia.org/wikipedia/ru/7/73/Ultraviolencecoveralbum.png',
      'https://i.ytimg.com/vi/PzIXNqpCug0/maxresdefault.jpg',
      'https://m.media-amazon.com/images/I/71-Y-3usHkL._UF1000,1000_QL80_.jpg',
      'https://i1.sndcdn.com/artworks-000213577767-fbxzyi-t500x500.jpg',
    ],
  },
  faq: [
    {
      id: 1,
      title: 'Как заказать сайт?',
      description: 'Вы можете заказать проект в it_kg_',
    },
    {
      id: 2,
      title: 'Как заказать сайт?',
      description: 'Вы можете заказать проект в it_kg_',
    },
    {
      id: 3,
      title: 'Как заказать сайт?',
      description: 'Вы можете заказать проект в it_kg_',
    },
    {
      id: 4,
      title: 'Как заказать сайт?',
      description: 'Вы можете заказать проект в it_kg_',
    },
    {
      id: 5,
      title: 'Как заказать сайт?',
      description: 'Вы можете заказать проект в it_kg_',
    },
    {
      id: 6,
      title: 'Как заказать сайт?',
      description:
          'Вы можете заказать проект в it_kg_Вы можете заказать проект в it_kg_Вы можете заказать проект в it_kg_Вы можете заказать проект в it_kg_Вы можете заказать проект в it_kg_Вы можете заказать проект в it_kg_Вы можете заказать проект в it_kg_',
    },
  ],
  administration: [
    {
      id: 1,
      image: 'https://0d314c86-f76b-45cc-874e-45816116a667.selcdn.net/2d9c2338-db20-4f5e-99b8-e4f12806d9e6.png',
      name: 'Илонк Маск',
      description:
          'Директор компании - визионер, лидер и стратег, объединяющий опыт и инновации для устойчивого роста. Стремится к успеху через мотивацию команды, стратегический анализ и создание инновационных решений.',
    },
    {
      id: 2,
      image: 'https://tengrinews.kz/userdata/news/2024/news_541317/thumb_b/photo_478858.jpeg',
      name: 'Павел Дуров',
      description:
          'Директор компании - визионер, лидер и стратег, объединяющий опыт и инновации для устойчивого роста. Стремится к успеху через мотивацию команды, стратегический анализ и создание инновационных решений.',
    },
    {
      id: 3,
      image: 'https://cdn.forbes.ru/files/profile/mark_zuckerberg.jpg__1584098699__86520.jpg',
      name: 'Марк Цукерберг',
      description:
          'Директор компании - визионер, лидер и стратег, объединяющий опыт и инновации для устойчивого роста. Стремится к успеху через мотивацию команды, стратегический анализ и создание инновационных решений.',
    },
    {
      id: 4,
      image: 'https://cdnn21.img.ria.ru/images/150664/91/1506649119_0:362:2052:1516_1920x0_80_0_0_6288c591d884a4a08b61172f9a70811c.jpg',
      name: 'Стив Джобс',
      description:
          'Директор компании - визионер, лидер и стратег, объединяющий опыт и инновации для устойчивого роста. Стремится к успеху через мотивацию команды, стратегический анализ и создание инновационных решений.',
    },
  ],
  employees: [
    {
      id: 1,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
    {
      id: 2,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
    {
      id: 3,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
    {
      id: 4,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
    {
      id: 5,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
    {
      id: 6,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
    {
      id: 7,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hitler_portrait_crop.jpg/274px-Hitler_portrait_crop.jpg',
      name: 'Адольф Гитлер',
      position: 'Директор',
    },
    {
      id: 8,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
    {
      id: 9,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
    {
      id: 10,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
    {
      id: 11,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
    {
      id: 12,
      image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
      name: 'Павел Дуров',
      position: 'Директор',
    },
  ],
  employee: {
    id: 7,
    image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hitler_portrait_crop.jpg/274px-Hitler_portrait_crop.jpg',
    name: 'Адольф Гитлер',
    position: 'Директор',
    date: '2024.08.22',
    description:
        'Разработка и поддержка серверной Разработка и поддержка серверной Разработка и поддержка серверной Разработка и поддержка серверной Разработка и поддержка серверной Разработка и поддержка серверной Разработка и поддержка сервернойРазработка и поддержка серверной части веб-приложений, обеспечивая их надежную и эффективную работу.Проектирование и реализация архитектуры бэкенда, включая выбор технологий, баз данных и структур данных.Написание высококачественного кода с использованием современного языка программирования Java',
  },
  documents: [
    {
      id: 1,
      title: 'Практика жетекчисинин жобосу',
      description: 'Практика жетекчисинин жобосу',
      file: 'pdf',
    },
    {
      id: 2,
      title: 'Практика жетекчисинин жобосу',
      description: 'Практика жетекчисинин жобосу',
      file: 'pdf',
    },
    {
      id: 3,
      title: 'Практика жетекчисинин жобосу',
      description: 'Практика жетекчисинин жобосу',
      file: 'pdf',
    },
    {
      id: 4,
      title: 'Практика жетекчисинин жобосу',
      description: 'Практика жетекчисинин жобосу',
      file: 'pdf',
    },
    {
      id: 5,
      title: 'Практика жетекчисинин жобосу',
      description: 'Практика жетекчисинин жобосу',
      file: 'pdf',
    },
    {
      id: 6,
      title: 'Практика жетекчисинин жобосу',
      description: 'Практика жетекчисинин жобосу',
      file: 'pdf',
    },
    {
      id: 7,
      title: 'Практика жетекчисинин жобосу',
      description: 'Практика жетекчисинин жобосу',
      file: 'pdf',
    },
  ]
}

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers:{

  }
})