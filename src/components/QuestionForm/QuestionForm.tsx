import { memo, useCallback, useState } from "react";
import { useTranslation } from "next-i18next";
import Form from "../Form/Form";
import { IItem } from "@/interfaces/common.interface";

interface QuestionFormProps {
  tour: IItem;
}

const defaultForm = {
  name: '',
  phone: '',
  email: '',
  message: ''
};

function QuestionForm({ tour }: QuestionFormProps) {
  const [form, setForm] = useState(defaultForm);
  const { t } = useTranslation();

  const onSubmitForm = useCallback(() => {
    
  }, [form]);

  const onFormChange = useCallback(
    (name: keyof typeof defaultForm, value: any) => {
      setForm((prev) => ({ ...prev, [name]: value }));
    }, []
  );

  return (
    <Form
      title={t("bookTour")!}
      label={t("fillFields")!}
      onSubmit={onSubmitForm}
      submitTitle={t('sendMessage')!}
    >
      <input
        value={defaultForm.name}
        onChange={(e) => onFormChange("name", e.target.value)}
        className="input-light"
        placeholder={t("yourName")!}
        required
      />
      <input
        value={defaultForm.phone}
        onChange={(e) => onFormChange("phone", e.target.value)}
        className="input-light"
        placeholder={t("phoneNumber")!}
        required
      />
      <input
        value={defaultForm.email}
        onChange={(e) => onFormChange("email", e.target.value)}
        className="input-light"
        placeholder={t("email")!}
        required
        type="email"
      />
      <textarea
        value={defaultForm.message}
        onChange={(e) => onFormChange("message", e.target.value)}
        className="input-light"
        placeholder={t("yourMessage")!}
        required
      />
    </Form>
  );
}

export default memo(QuestionForm);
