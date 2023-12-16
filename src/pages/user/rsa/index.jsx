import { Fragment } from "react";

import { Button, Flex, Form, Input } from "antd";

import "./style.scss";

const UserRsaPage = () => {
  const isCoprime = (e, fi) => {
    while (fi != 0) {
      let temp = fi;
      fi = e % fi;
      e = temp;
    }
    return e == 1;
  };

  const select_E_Number = (fi) => {
    for (let i = 2; i < fi; i++) {
      if (isCoprime(i, fi)) {
        return i;
      }
    }
  };

  const rsa = (a, b) => {
    for (let i = 0; i < 10000; i++) {
      if ((a * i) % b == 1) {
        return i;
      }
    }
  };

  const alphabet = "abcdefghijklmnopqrstuvwxyz@#$%&!?.':;0123456789 ";
  for (let i = 0; i < alphabet.length; i++) {
    console.log(i, "-", alphabet[i]);
  }

  const onFinish = (values) => {
    const { pNumber, qNumber, text } = values;
    let nNumber = pNumber * qNumber;
    let fiNumber = (pNumber - 1) * (qNumber - 1);
    let eNumber = select_E_Number(fiNumber);
    let dNumber = rsa(eNumber, fiNumber);
    console.log("fi=", fiNumber, "-", "E=", eNumber, "-", "d=", dNumber);

    let shifr = [];
    let shifrText = "";

    //SHIFRLASH

    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (text[i] == alphabet[j]) {
          console.log("i=", i, "---", "j=", j + 1);
          shifr.push(Math.pow(j + 1, eNumber) % nNumber);
        }
      }
    }

    for (let i = 0; i < shifr.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (shifr[i] == j + 1) {
          shifrText += alphabet[j];
        }
      }
    }
    console.log(shifr);
    console.log("Shifrlangan xabar: ", shifrText);

    //DESHIFRLASH

    let deShifr = [];
    let deShifrText = "";

    for (let i = 0; i < shifrText.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (shifrText[i] == alphabet[j]) {
          deShifr.push(Math.pow(j + 1, dNumber) % nNumber);
        }
      }
    }

    for (let i = 0; i < deShifr.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (deShifr[i] == j + 1) {
          deShifrText += alphabet[j];
        }
      }
    }

    console.log("Deshifrlangan xabar: ", deShifrText);
  };

  return (
    <Fragment>
      <section>
        <Flex className="form__box__rsa" align="center" justify="center">
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 600,
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="P raqamini kiriting: "
              name="pNumber"
              rules={[
                {
                  required: true,
                  message: "Iltimos P ni kiriting!",
                },
              ]}
            >
              <Input type="number" placeholder="p raqami" />
            </Form.Item>

            <Form.Item
              label="Q raqamini kiriting: "
              name="qNumber"
              rules={[
                {
                  required: true,
                  message: "Iltimos Q ni kiriting!",
                },
              ]}
            >
              <Input type="number" placeholder="q raqami" />
            </Form.Item>

            <Form.Item
              label="Shifrlanuvchi xabarni kiriting:  "
              name="text"
              rules={[
                {
                  required: true,
                  message: "Iltimos shifrlanuvchi xabarni kiriting!",
                },
              ]}
            >
              <Input.TextArea placeholder="Xabarrni kiriting" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button
                style={{ width: "100%", marginTop: "20px" }}
                type="primary"
                htmlType="submit"
              >
                Hisoblash
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </section>
    </Fragment>
  );
};

export default UserRsaPage;
