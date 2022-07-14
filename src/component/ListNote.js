import { Avatar, Button, List, Skeleton, Form } from "antd";
import "../style/ListNote.css";
import React, { useState } from "react";
import FormAdd from "./FormAdd";
import Fuse from "fuse.js";
import FormEdit from "./FormEdit";
import Search from "antd/lib/transfer/search";

const ListNote = ({showMoreData}) => {
  // const [data, setData] = useState([]);
  const [editData, setEditData] = useState();
  function makeid(length) {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  const [list, setList] = useState([
    {
      id: makeid(5),
      name: "houseWork",
      todo: [
        {
          createdAt: "2022-07-12T11:22:02.799Z",
          title: "Sheldon Grady",
          content:
            "Ipsa qui velit voluptas aperiam repellat molestiae eveniet tenetur animi. Aspernatur ex ipsa voluptatem sed. Sed ut doloremque quibusdam beatae et aut.",
          id: "1",
        },
        {
          createdAt: "2022-07-12T22:57:16.315Z",
          title: "Suzanne Anderson",
          content:
            "Vel ut quaerat hic quos dolores. Eligendi quaerat officia. Sit ab dolores aut odit debitis tempora ea enim. Ut unde dolorem facere. Eum eligendi harum quasi cumque rerum sint voluptatum vero ipsam. Et facilis praesentium molestiae voluptas veniam voluptatem iure sit voluptas.",
          id: "2",
        },
        {
          createdAt: "2022-07-12T19:56:01.878Z",
          title: "Kathleen Jaskolski",
          content:
            "Architecto temporibus neque facilis asperiores minus. Rerum tenetur ut magnam non. Labore neque in ut quia id enim aut. Ut est maiores eveniet error dolorem voluptates. Eveniet dolor dolor ut voluptatibus eos.",
          id: "3",
        },
        {
          createdAt: "2022-07-13T01:53:48.556Z",
          title: "Nick Kuphal",
          content:
            "Fuga eveniet sunt rerum non sequi rerum. Impedit vel earum consectetur autem rerum. Aut fugit hic laudantium.",
          id: "4",
        },
        {
          createdAt: "2022-07-13T00:44:13.407Z",
          title: "Kim Carroll",
          content:
            "Omnis in deserunt facere quae quam laboriosam. Voluptates ea voluptatem alias omnis voluptatem. Voluptas natus eos magni. Et et explicabo aut qui consequuntur.",
          id: "5",
        },
        {
          createdAt: "2022-07-12T11:59:38.544Z",
          title: "Rachael Pfeffer",
          content:
            "Sed praesentium nemo itaque cupiditate. Voluptas ad eveniet libero tempore sequi. Qui doloribus voluptas sapiente nesciunt quia quae iusto beatae.",
          id: "6",
        },
        {
          createdAt: "2022-07-12T16:27:10.410Z",
          title: "Cody Braun",
          content:
            "Ut expedita consectetur fuga. Reiciendis est modi. Et iste ut. Repellat sapiente minus hic magnam.",
          id: "7",
        },
        {
          createdAt: "2022-07-13T06:38:37.137Z",
          title: "Elvira Halvorson",
          content:
            "Reprehenderit beatae sint perspiciatis sapiente. Veniam et autem expedita sit distinctio quis et facilis. Omnis atque odio sed.",
          id: "8",
        },
      ],
      content: "việc nhà",
    },
    {
      id: makeid(5),
      name: "spending",
      todo: [
        {
          createdAt: "2022-07-12T11:25:11.304Z",
          title: "Essie Morissette",
          content:
            "Laborum earum placeat harum rerum. Repellendus deserunt voluptas ipsum quis esse unde ipsum est consequatur. Voluptatibus rem necessitatibus. Quasi quibusdam aliquam qui id doloribus. Explicabo corrupti aut ut nihil et illum exercitationem error velit.",
          id: "1",
        },
        {
          createdAt: "2022-07-13T03:56:58.345Z",
          title: "Bessie MacGyver",
          content:
            "Porro provident qui. Natus vitae accusantium corrupti voluptatibus. In omnis aspernatur molestiae corporis impedit iste dolor laudantium voluptate. Amet praesentium consequatur.",
          id: "2",
        },
        {
          createdAt: "2022-07-13T03:29:55.164Z",
          title: "Ms. Fernando Fay",
          content:
            "Amet ipsum laboriosam expedita. Sit omnis facere eius quia excepturi aliquam vel accusantium rerum. Dignissimos debitis qui voluptatibus dolore assumenda. Quis voluptate voluptatem ut maiores aut.",
          id: "3",
        },
        {
          createdAt: "2022-07-12T18:53:01.113Z",
          title: "Caroline Wiegand",
          content:
            "Aliquid vel quas incidunt et ea accusamus architecto iste commodi. Repudiandae deleniti cum voluptatum laboriosam tempora. Ab illum itaque. Asperiores maiores eligendi ut unde laudantium. Animi voluptatem nostrum. Ab repudiandae et.",
          id: "4",
        },
        {
          createdAt: "2022-07-12T20:43:15.434Z",
          title: "Bob Lehner",
          content:
            "Consequatur et harum est. Voluptatem rem velit dolores id molestiae. Tempora omnis commodi dolore.",
          id: "5",
        },
      ],
      content: "chi tiêu",
    },
    {
      id: makeid(5),
      name: "homeWork",
      todo: [
        {
          title: "Spencer Nitzsche",
          content:
            "Consequatur aspernatur delectus. Ratione quia et saepe veritatis. Itaque quidem eos animi.",
          createAt: "2014-06-22T05:50:31.969Z",
          id: "1",
        },
        {
          title: "Julius Predovic",
          content:
            "Ex soluta ut. Incidunt soluta voluptas. Atque culpa sed eligendi culpa sunt. Maxime et nesciunt praesentium et.",
          createAt: "2092-05-03T03:32:46.204Z",
          id: "2",
        },
        {
          title: "Gordon Bogisich",
          content:
            "Aliquid ut vel temporibus accusantium enim voluptatem dolores omnis. Praesentium non odio repellat ab. Nesciunt nisi tempore quisquam architecto ipsum sapiente aut quia. Facilis molestias delectus ut porro quos officia aut nobis. Ducimus ipsum voluptates voluptatum. Corrupti ratione ut ea aut aut quia ipsa.",
          createAt: "1994-12-24T17:30:06.417Z",
          id: "3",
        },
        {
          title: "Jeannette Champlin MD",
          content:
            "Amet ut esse eius ratione. Laborum doloremque deserunt deserunt sint aliquam itaque officiis inventore error. Vel ea ex. Vero accusamus dolor doloremque fugiat molestias.",
          createAt: "2095-04-02T16:59:03.136Z",
          id: "4",
        },
      ],
      content: "bài tập về nhà",
    },
  ]);

  const handleCreate = (value) => {
    const values = {
      ...value,
      todo: {},
      id: makeid(5),
    };
    const newList = [values, ...list];
    setList(newList);
  };

  const [query, setQuery] = useState("");

  const options = {
    keys: ["id", "name"],
    includeScore: true,
  };

  const myIndex = Fuse.createIndex(options.keys, list);
  const fuse = new Fuse(list, options, myIndex);
  // 3. Now search!
  const results = fuse.search(query);
  const characterResults =
    query !== "" ? results.map((result) => result.item) : list;

  const handleOnSearch = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setQuery(value);
  };

  const [isModalEditVisible, setIsModalEditVisible] = useState(false);
  console.log(
    "🚀 ~ file: ListNote.js ~ line 195 ~ ListNote ~ isModalEditVisible",
    isModalEditVisible
  );

  const showModalEdit = (item) => {
    setIsModalEditVisible(true);
    setEditData(item);
  };

  const handleEdit = (value) => {
    setIsModalEditVisible(false);
    const index = list.findIndex((item) => item.id === editData.id);
    const editedData = {
      ...value,
      todo: { ...editData.todo },
      id: editData.id,
    };

    const newList = [...list];
    newList.splice(index, 1, editedData);
    setList(newList);
  };
  const handleCancel = () => {
    setIsModalEditVisible(false);
  };

  const showMore = (value) => {
    showMoreData(value);
  }
  return (
    <>
      <div className="ListNote">
        <Form className="btn">
          <label>Search</label>
          <Search allowClear enterButton="Search" value={query} onChange={handleOnSearch}/>
        </Form>
      </div>

      <FormAdd handleCreate={handleCreate} />

      {isModalEditVisible && (
        <FormEdit
          isModalEditVisible={isModalEditVisible}
          item={editData}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
        />
      )}
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={characterResults}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                key="list-loadmore-edit"
                onClick={() => {
                  showModalEdit(item);
                }}
              >
                edit
              </Button>,
              <Button type="primary" key="list-loadmore-more" onClick={() => {showMore(item.todo)}}>
                more
              </Button>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.content}
              />
              <div> ghi chú {item.content}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};

export default ListNote;
