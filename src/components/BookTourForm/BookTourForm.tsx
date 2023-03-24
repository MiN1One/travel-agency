import { memo, useCallback, useState } from "react";
import { useTranslation } from "next-i18next";
import Form from "../Form/Form";
import DateInput from "../DateInput/DateInput";
import { ITourExpanded } from "@/interfaces/tour.interface";
import { fetchData } from "@/utils/client-fetch.utils";
import dayjs from "dayjs";

interface BookTourFormProps {
  tour: ITourExpanded;
}

const defaultBookForm = {
  name: "",
  phone: "",
  email: "",
  date: new Date().toISOString(),
  comment: "",
};

function BookTourForm({ tour }: BookTourFormProps) {
  const [bookForm, setBookForm] = useState(defaultBookForm);
  const [status, setStatus] = useState<null | 'fail' | 'success'>(null); 
  const { t, i18n } = useTranslation();

  const onSubmitBooking = useCallback(async () => {
    setStatus(null);
    const result = await fetchData(
      `tours/${tour.id}/book/`, 
      i18n.language, 
      {
        method: 'POST',
        body: JSON.stringify({
          full_name: bookForm.name,
          phone_number: bookForm.phone,
          email: bookForm.email,
          text: bookForm.comment,
          date: dayjs(bookForm.date).format('YYYY-MM-DD')
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (result) {
      setBookForm(defaultBookForm);
      setStatus('success');
    } else {
      setStatus('fail');
    }
  }, [bookForm, i18n.language]);

  const onFormChange = useCallback(
    (name: keyof typeof defaultBookForm, value: any) => {
      setBookForm((prev) => ({ ...prev, [name]: value }));
    }, []
  );

  return (
    <Form
      title={t('bookTour')!}
      label={t('fillFields')!}
      onSubmit={onSubmitBooking}
      submitTitle={t('bookTour')}
      status={status}
    >
      <input
        value={bookForm.name}
        onChange={(e) => onFormChange("name", e.target.value)}
        placeholder={t("yourName")!}
        required
        className="input-light"
      />
      <input
        value={bookForm.phone}
        onChange={(e) => onFormChange("phone", e.target.value)}
        placeholder={t("phoneNumber")!}
        required
        className="input-light"
      />
      <input
        value={bookForm.email}
        onChange={(e) => onFormChange("email", e.target.value)}
        placeholder={t("email")!}
        required
        className="input-light"
        type="email"
      />
      <DateInput
        date={bookForm.date}
        onChange={(date) => onFormChange("date", date)}
      />
      <input
        value={bookForm.comment}
        onChange={(e) => onFormChange("comment", e.target.value)}
        placeholder={t("comment")!}
        className="input-light"
      />
    </Form>
  );
}

export default memo(BookTourForm);
