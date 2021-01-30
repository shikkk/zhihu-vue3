export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
}
export interface DetailsProps {
    id: number;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    columnId: number;
}

export const testData: ColumnProps[] = [
    {
        id: 1,
        title: 'test1',
        avatar: 'https://img.tupianzj.com/uploads/200427/9-20042F94I2K5.jpg',
        description: '这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍'
    },
    {
        id: 2,
        title: 'test2',
        avatar: '',
        description: '这是简绍，这是介绍这是简绍，这是介绍这是简绍是介绍这是简绍，这是介绍'
    },
    {
        id: 3,
        title: 'test1',
        avatar: 'https://img.tupianzj.com/uploads/200427/9-20042F94I2K5.jpg',
        description: '这是简绍，这是介这是介绍这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍'
    }, {
        id: 4,
        title: 'test1',
        avatar: 'https://img.tupianzj.com/uploads/200427/9-20042F94I2K5.jpg',
        description: '这是简绍，这是介绍这是简绍，这，这是介绍这是简绍，这是介绍'
    }
]

export const testDetails: DetailsProps[] = [
    {
        id: 1,
        title: '这是我的第一篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
        createdAt: '2020-06-11 10:34:22',
        columnId: 1
    },
    {
        id: 2,
        title: '这是我的第二篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        createdAt: '2020-06-11 10:34:22',
        columnId: 1
    },
    {
        id: 3,
        title: '这是我的第三篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
        createdAt: '2020-06-11 10:34:22',
        columnId: 1
    }
]
