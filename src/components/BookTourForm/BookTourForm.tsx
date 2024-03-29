import { memo, useCallback, useState } from "react";
import { useTranslation } from "next-i18next";
import Form from "../Form/Form";
import { IItem } from "@/interfaces/common.interface";
import DateInput from "../DateInput/DateInput";

interface BookTourFormProps {
  tour: IItem;
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
  const { t } = useTranslation();

  const onSubmitBooking = useCallback(() => {

  }, [bookForm]);

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
