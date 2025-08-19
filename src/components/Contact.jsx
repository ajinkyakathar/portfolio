import React from "react";
import { Button, Form, Input, message } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();

const onFinish = (values) => {
  messageApi.success("Message sent successfully!");
  const { name, email, subject, message: userMessage } = values;
  const text = `Hello, my name is ${name}.\n\nSubject: ${subject}\n\n${userMessage}\n\nMy email: ${email}`;
  const encodedMessage = encodeURIComponent(text);
  const phoneNumber = "8908013842";
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};


  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-white to-gray-50"
    >
      {contextHolder}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 text-md">
            I'm always open to new projects, collaborations, or just a chat!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-700">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <EnvironmentOutlined className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">Mumbai</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <MailOutlined className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">amarkumarprajapati@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <PhoneOutlined className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">8908013842</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 mt-8">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/amar-kumar-prajapati-76255072/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition duration-300"
                >
                  <LinkedinOutlined />
                </a>
                <a
                  href="https://github.com/amarkumarprajapati?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:scale-110 transition duration-300"
                >
                  <GithubOutlined />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
              Send Me a Message
            </h3>

            <Form name="contact" layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Your Name"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="text-gray-400" />}
                  placeholder="Your Email"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input
                  placeholder="Subject"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <TextArea
                  rows={5}
                  placeholder="Your Message"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                  size="large"
                   onClick={() => {
                    const formValues = Form.useFormInstance().getFieldsValue();

                    if (
                      !formValues.name ||
                      !formValues.email ||
                      !formValues.subject ||
                      !formValues.message
                    ) {
                      messageApi.warning(
                        "Please fill out all fields before sending via WhatsApp"
                      );
                      return;
                    }

                    const {
                      name,
                      email,
                      subject,
                      message: userMessage,
                    } = formValues;
                    const text = `Hello, my name is ${name}.\n\nSubject: ${subject}\n\n${userMessage}\n\nMy email: ${email}`;
                    const encodedMessage = encodeURIComponent(text);
                    const phoneNumber = "8908013842";
                    window.open(
                      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
                      "_blank"
                    );
                  }}
                  className="w-full"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
