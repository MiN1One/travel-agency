import { memo, useCallback, useState } from "react";
import { useTranslation } from "next-i18next";
import Form from "../Form/Form";
import { ITourExpanded } from "@/interfaces/tour.interface";
import { fetchData } from "@/utils/client-fetch.utils";

interface QuestionFormProps {
  tour: ITourExpanded;
}

const defaultForm = {
  name: '',
  phone: '',
  email: '',
  message: ''
};

function QuestionForm({ tour }: QuestionFormProps) {
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState<null | 'fail' | 'success'>(null); 
  const { t, i18n } = useTranslation();

  const onSubmitForm = useCallback(async () => {
    setStatus(null);
    const result = await fetchData(
      `tours/${tour.id}/ask-question/`,
      i18n.language, 
      {
        method: 'POST',
        body: JSON.stringify({
          full_name: form.name,
          phone_number: form.phone,
          email: form.email,
          text: form.message,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (result) {
      setForm(defaultForm);
      setStatus('success');
    } else {
      setStatus('fail');
    }
  }, [form, i18n.language]);

  const onFormChange = useCallback(
    (name: keyof typeof defaultForm, value: any) => {
      setForm((prev) => ({ ...prev, [name]: value }));
    }, []
  );

  return (
    <Form
      title={t('sendMessage')!}
      label={t("fillFields")!}
      onSubmit={onSubmitForm}
      submitTitle={t('sendMessage')!}
      status={status}
    >
      <input
        value={form.name}
        onChange={(e) => onFormChange("name", e.target.value)}
        className="input-light"
        placeholder={t("yourName")!}
        required
      />
      <input
        value={form.phone}
        onChange={(e) => onFormChange("phone", e.target.value)}
        className="input-light"
        placeholder={t("phoneNumber")!}
        required
      />
      <input
        value={form.email}
        onChange={(e) => onFormChange("email", e.target.value)}
        className="input-light"
        placeholder={t("email")!}
        required
        type="email"
      />
      <textarea
        value={form.message}
        onChange={(e) => onFormChange("message", e.target.value)}
        className="input-light"
        placeholder={t("yourMessage")!}
        required
      />
    </Form>
  );
}

export default memo(QuestionForm);
