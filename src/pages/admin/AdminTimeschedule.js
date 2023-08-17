import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import AdminNavbar from '../../components/admin-navbar/AdminNavbar'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase';

function TableRows({ rows, tableRowRemove, onValUpdate }) {
    return rows.map((rowsData, index) => {
      const { title, description, start, id } = rowsData;
      return (
        <tr key={index}>
          <td>
            <input
              type="text"
              value={title}
              onChange={(event) => onValUpdate(index, event)}
              name="title"
              className="form-control"
            />
          </td>
          <td>
            <textarea
              type="text"
              value={description}
              onChange={(event) => onValUpdate(index, event)}
              name="description"
              className="form-control"
            />
          </td>
          <td>
            <input
              type="datetime-local"
              value={start}
              onChange={(event) => onValUpdate(index, event)}
              name="start"
              className="form-control"
            />
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => tableRowRemove(index)}
            >
              <IoMdRemove size="2rem" />
            </button>
          </td>
        </tr>
      );
    });
  }

  function AdminTimeschedule() {
    const [rows, initRow] = useState([]);

    const docRef = doc(db, 'events', 'kvammalan2023')

    getDoc(docRef).then(document => {
        const temp = []
        document.data().timeschedule.forEach((item) => {
            temp.push({
                title: item.title,
                description: item.description,
                start: item.start,
            })
        })
        initRow(temp)
    })

    const addRowTable = () => {
      const data = {
        title: "",
        description: "",
        start: "",
      };
      initRow([...rows, data]);
    };

    const tableRowRemove = (index) => {
      const dataRow = [...rows];
      dataRow.splice(index, 1);
      initRow(dataRow);
    };

    const onValUpdate = (i, event) => {
      const { name, value } = event.target;
      const data = [...rows];
      data[i][name] = value;
      initRow(data);
    };

    const saveTable = () => {
        console.log(rows)

        const docRef = doc(db, 'events', 'kvammalan2023')

        updateDoc(docRef, {
            timeschedule: rows
        }).then(() => {
            alert('Program oppdatert!')
        }).catch(error => console.error(error))
    }

    return (
      <>
        <Container fluid className="d-flex flex-column m-0 p-0">
            <AdminNavbar />
            <h2 className="text-center fw-bolder my-3">PROGRAM</h2>
            <table style={{ width: '85%' }} className="table table-striped mx-auto">
            <thead>
                <tr>
                <th>TITTEL</th>
                <th>BESKRIVELSE</th>
                <th>STARTTIDSPUNKT</th>
                <th className="d-flex">
                    <button className="btn btn-primary" onClick={addRowTable}>
                        <IoMdAdd size="2rem" />
                    </button>
                </th>
                </tr>
            </thead>
            <tbody>
                <TableRows
                    rows={rows}
                    tableRowRemove={tableRowRemove}
                    onValUpdate={onValUpdate}
                />
            </tbody>
            </table>
            <Button className="w-25 mx-auto mt-5" variant="primary" onClick={() => saveTable()}>LAGRE PROGRAM</Button>
        </Container>
      </>
    );
  }
  export default AdminTimeschedule;