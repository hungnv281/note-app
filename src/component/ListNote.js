import { Avatar, Button, List, Skeleton, Modal, Input, Form } from "antd";
import "../style/ListNote.css";
import React, { useEffect, useState } from "react";
import FormAdd from "./FormAdd";
import Fuse from "fuse.js";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const ListNote = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

        window.dispatchEvent(new Event("resize"));
      });
  };
  const handleCreate = (value) => {
    console.log(value);
    const values = {
      ...value,
      name: {
        first: value.first,
        last: value.last,
        title: value.title,
      },
    };
    const newData = [values, ...data];
    setData(newData);
    const newList = [values, ...list];
    setList(newList);
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  const Search = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [query, setQuery] = useState("");

    const options = {
      keys: ["name.last", "name.title", "name.first"],
      includeScore: true,
    };

    const myIndex = Fuse.createIndex(options.keys, list);
    const fuse = new Fuse(list, options, myIndex);
    // 3. Now search!
    const results = fuse.search(query);
    const characterResults = results.map((result) => result.item);

    const handleOnSearch = ({ currentTarget = {} }) => {
      const { value } = currentTarget;
      console.log(value);
      console.log(characterResults);
      setQuery(value);
    };
    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
      <>
        <Button className="btn" type="primary" onClick={showModal}>
          Search
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            dataSource={characterResults}
            renderItem={(item) => (
              <>
                <List.Item
                  actions={[
                    <Button type="primary" key="list-loadmore-edit">
                      edit
                    </Button>,
                    <Button type="primary" key="list-loadmore-more">
                      more
                    </Button>,
                  ]}
                >
                  <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                      avatar={
                        <Avatar src={"https://joeschmoe.io/api/v1/random"} />
                      }
                      title={<a href="https://ant.design">{item.name?.last}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    <div>content</div>
                  </Skeleton>
                </List.Item>
              </>
            )}
          />
          <Form className="btn">
            <label>Search</label>
            <Input type="text" value={query} onChange={handleOnSearch}></Input>
          </Form>
        </Modal>
      </>
    );
  };

  return (
    <>
      <Search />

      <FormAdd
        count={count}
        list={list}
        data={data}
        handleCreate={handleCreate}
      />
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="primary" key="list-loadmore-edit">
                edit
              </Button>,
              <Button type="primary" key="list-loadmore-more">
                more
              </Button>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};

export default ListNote;
